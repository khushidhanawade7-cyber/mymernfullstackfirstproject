import express from "express";
import {
    createItem,
    deleteItem,
    getItemById,
    getItems,
    updateItem,
} from "../controllers/ItemController.js";
import upload from "../middlewares/upload.js";

const ItemRouter = express.Router();

ItemRouter.post("/", upload.single("itemImage"), createItem);
ItemRouter.get("/", getItems);
ItemRouter.get("/:id", getItemById);
ItemRouter.put("/:id", upload.single("itemImage"), updateItem);
ItemRouter.delete("/:id", deleteItem);
export default ItemRouter;
