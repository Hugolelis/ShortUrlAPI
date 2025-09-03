// modules 
import mongoose from "mongoose";

// helpers
import { createdDate } from "../helpers/utils/created-date";
import { expiresDate } from "../helpers/utils/expires-date";

// schema
const UrlSchema = new mongoose.Schema({
    originalURL: { type: String, required: true },
    shortURL: { type: String, required: true },
    shortCode: { type: String, required: true },
    createdAt: { type: Date, required: true, default: createdDate },
    expiresAt: { type: Date, required: true, default: expiresDate }
})

// TTL index (auto expire)
UrlSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// model
export const Url = mongoose.model('Url', UrlSchema)

