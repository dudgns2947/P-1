import express from "express";

const boardRouter = express.Router();

const handleWrite = (req, res) => res.send("글 쓰기");
const handleSpecific = (req, res) => res.send("글 상세보기");
const handleDelete = (req, res) => res.send("글 삭제하기");
const handleEdit = (req, res) => res.send("글 수정하기");

boardRouter.get("/Write", handleWrite);
boardRouter.get("/Specific", handleSpecific);
boardRouter.get("/Delete", handleDelete);
boardRouter.get("/Edit", handleEdit);

export default boardRouter;
