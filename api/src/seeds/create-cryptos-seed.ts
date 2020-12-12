import { Crypto } from './../crypto/entities/crypto.entity';
import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Crypto)
      .values([
        {
          cmid: "bitcoin",
          fullName: "Bitcoin",
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png",
          default: true
        },
        {
          cmid: "0xmonero",
          fullName: "0xmonero",
          imgUrl: "https://static.latribune.fr/full_width/1568204/le-bitcoin-a-plus-de-18-000-se-rapproche-de-son-record.jpg",
          default: true
        },
        {
          cmid: "1337",
          fullName: "Elite",
          imgUrl: "https://static.latribune.fr/full_width/1568204/le-bitcoin-a-plus-de-18-000-se-rapproche-de-son-record.jpg",
          default: true
        },
        {
          cmid: "extradna",
          fullName: "extraDNA",
          imgUrl: "https://static.latribune.fr/full_width/1568204/le-bitcoin-a-plus-de-18-000-se-rapproche-de-son-record.jpg",
          default: false
        },
        {
          cmid: "ezoow",
          fullName: "EZOOW",
          imgUrl: "https://static.latribune.fr/full_width/1568204/le-bitcoin-a-plus-de-18-000-se-rapproche-de-son-record.jpg",
          default: false
        },
      ])
      .execute()
  }
}