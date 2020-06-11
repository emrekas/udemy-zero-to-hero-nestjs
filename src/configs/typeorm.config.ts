import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'ec2-46-137-84-140.eu-west-1.compute.amazonaws.com',
    port: 5432,
    username: 'efvdbnfmnwcano',
    password: 'e29d5061d42806b117d40436c6c548f9c0653bda85268d0a792f500d40fb3352',
    database: 'd9m3sorgdghk4m',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    extra: {
        ssl: true
    },
}