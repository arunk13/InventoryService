import * as express from "express";

export var router = express.Router();

//Middleware to track the incoming request. 
var requestLogger: express.RequestHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("Incoming request: "); console.log(new Date());
    next();
}

router.use(requestLogger);

var getAllFoodItems: express.RequestHandler = (req: express.Request, res: express.Response) => {
    console.log("getAllFoodItems");
    res.end(JSON.stringify("Okra"));
}

var getAllFoodItemById: express.RequestHandler = (req: express.Request, res: express.Response) => {
    console.log("getAllFoodItemById");
    res.end(JSON.stringify("getAllFoodItemById"));

}

var addFoodItem: express.RequestHandler = (req: express.Request, res: express.Response) => {
    console.log("addFoodItem");
    res.end(JSON.stringify("addFoodItem"));

}

var updateFoodItem: express.RequestHandler = (req: express.Request, res: express.Response) => {
    console.log("updateFoodItem");
    res.end(JSON.stringify("updateFoodItem"));

}

var deleteFoodItemById: express.RequestHandler = (req: express.Request, res: express.Response) => {
    console.log("deleteFoodItemById");
    res.end(JSON.stringify("deleteFoodItemById"));
}

router.get("/getAllFoodItems", getAllFoodItems);
router.get("/getAllFoodItemById", getAllFoodItemById);
router.get("/addFoodItem", addFoodItem);
router.get("/updateFoodItem", updateFoodItem);
router.get("/deleteFoodItemById", deleteFoodItemById);
