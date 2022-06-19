'use strict';
const { mongoose } = require('mongoose');
const { WeatherSchema } = require('./model/Weather')

const mongoDbUrl = "mongodb+srv://admin:8dNj52JtVvwWspM@mycluster.kcpmypg.mongodb.net/weather-task?retryWrites=true&w=majority";

function connect() {
    return new Promise(resolve => {
        resolve(mongoose.connect(mongoDbUrl, {
            useNewUrlParser: true
        }));
    });
}

module.exports.weather = async (event, context) => {
    
    console.log("event: ", event);
    console.log("context: ", context);

    try {
        
        console.log("MomgoDB Connecting...");
        await connect();
        mongoose.connection.on("open", () => {
            console.log("MomgoDB Connected...");
        });
        mongoose.connection.on("error", () => {
            console.error("Couldn't Connected to MomgoDB...");

            const response = {
                statusCode: 500,
                body: JSON.stringify({
                        message: "Unable to Connect to MongoDB",
                        error: error
                    },
                    null,
                    4
                ),
            };
            return response;

        });

        const weathers = [];
        JSON.parse(event.body).forEach(element => {
            weathers.push(new WeatherSchema(element));
        });

        return WeatherSchema.insertMany(weathers
        ).then((docs) => {
            console.log(docs.length, "Inserted");
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                        message: 'Weathers Data Inserted',
                        docs: docs
                    },
                    null,
                    4
                ),
            };
            return response;
    
        }).catch((error) => {
            console.error("Unable to Insert, Error: ", error);
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                        message: "Unable to Insert Weather Data",
                        error: error
                    },
                    null,
                    4
                ),
            };
            return response;
        });

    } catch(error) {
        console.error("Error: ", error);
        const response = {
            statusCode: 500,
            body: JSON.stringify({
                    message: "Error Occured",
                    error: error
                },
                null,
                4
            ),
        };
        return response;
    }


};


