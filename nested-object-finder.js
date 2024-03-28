let userName = {
    firstName: "slavo",
    lastName: "popovic",
    addresses: {
        mainAddress: {
            city: "Miami",
            zipCode: 33132,
            coordinates: {
                latitude: "25.7617 N",
                longitude: "80.1918 W",
                detail: {
                    mapZoomLevel: 10,
                    nearby: {
                        landmark: "Freedom Tower",
                        distance: "1km",
                        additionalInfo: {
                            visitHours: "9am - 5pm",
                            ticketPrice: "$10",
                            history: {
                                established: "1925",
                                architect: "Schultze and Weaver",
                                significance: "Miami's historical landmark"
                            }
                        }
                    }
                }
            }
        },
        secAddress: {
            city: "NYC",
            zipCode: 11000,
            coordinates: {
                latitude: "40.7128 N",
                longitude: "74.0060 W",
                detail: {
                    mapZoomLevel: 12,
                    nearby: {
                        landmark: "Central Park",
                        distance: "2km",
                        additionalInfo: {
                            visitHours: "6am - 1am",
                            ticketPrice: "Free",
                            history: {
                                established: "1857",
                                designer: "Frederick Law Olmsted and Calvert Vaux",
                                significance: "Most visited urban park in the USA"
                            }
                        }
                    }
                }
            }
        }
    },
    age: 42, 
    hobbies: ["soccer","basketball"], 
    flag: true
};


for (key in userName) {
    if (typeof userName[key] !== "object" || Array.isArray(userName[key]) === true ) {
        console.log(key, ": ", false);
    } else {
        console.log(key, ": ", true);
        for (i in userName[key]) {
            if (typeof userName[key][i] !== "object") {
                console.log(userName[key][i], ": ", false);
            } else {
                console.log(userName[key][i], ": ", true);
                for (j in userName[key][i]) {
                    if (typeof userName[key][i][j] !== "object") {
                        console.log(userName[key][i][j], ": ", false);
                    } else {
                        console.log(userName[key][i][j], ": ", true);
                        for (k in userName[key][i][j]) {
                            if (typeof userName[key][i][j][k] !== "object") {
                                console.log(userName[key][i][j][k], ": ", false);
                            } else {
                                console.log(userName[key][i][j][k], ": ", true);
                            } 
                        } 
                    } 
                } 
            } 
        } 
    }
}