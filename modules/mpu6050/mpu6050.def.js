{
    "type": "module_def",
    "name": "Mpu6050",  
    "version": 2,
    "task_priority": 80,
    "task_period": 200,
    "paramsSchema":{
        "type":"object",
        "id": "http://jsonschema.net",
        "properties":{
            "bus_type": {
                "type":"number",
                "required":true
            },
            "bus_name": {
                "type":"string",
                "required":true
            }
        }
    },
    "outputs":[
        {
            "name": "Gyro+Accel+Mag+Temp",
            "Schema":{
                "type":"object",
                "id": "http://jsonschema.net",
                "properties":{
                    "accelX": {
                        "type":"number",
                        "required":true
                    },
                    "accelY": {
                        "type":"number",
                        "required":true
                    },
                    "accelZ": {
                        "type":"number",
                        "required":true
                    },
                    "gyroX": {
                        "type":"number",
                        "required":true
                    },
                    "gyroY": {
                        "type":"number",
                        "required":true
                    },
                    "gyroZ": {
                        "type":"number",
                        "required":true
                    },
                    "magX": {
                        "type":"number",
                        "required":true
                    },
                    "magY": {
                        "type":"number",
                        "required":true
                    },
                    "magZ": {
                        "type":"number",
                        "required":true
                    },
                    "temperature": {
                        "type":"number",
                        "required":true
                    }
                }
            }
        }
    ]
}
