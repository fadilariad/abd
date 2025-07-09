import Counter from "./counter.model";
class CounterService {
    async getNextOrderNumber(): Promise<number> {
        const counter = await Counter.findOneAndUpdate(
            { name: 'invoice' },
            { $inc: { value: 1 } },
            { new: true, upsert: true }
        ).exec();

        return counter.value;
    }
}

export default new CounterService();