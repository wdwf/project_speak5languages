import AppDataSource from "./infrastructure/database/ormconfig";
import app from "./infrastructure/http/express";

AppDataSource.initialize().then(() => {
    return app.listen(process.env.PORT, () => {
        console.log(
            `API iniciada. Acesse a rota http://localhost:${process.env.PORT}`,
        );
    });
});
