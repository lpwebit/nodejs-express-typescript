import { Router } from "express";

export default interface AbstractController {
  getBasePath(): string;

  getRouter(): Router;

}
