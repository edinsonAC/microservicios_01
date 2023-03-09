import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from '../../config/base.entity';
import { RoleEntity } from '../../role/entity/role.entity';
import { DocumentEntity } from '../../document_type/entity/document.entity';

@Entity({name:"persons"})
export class PersonEntity extends BaseEntity{

    @Column({
        type:"varchar",
        length:30,
        nullable:false
    })
    name!:string

    @Column({
        type:"varchar",
        length:30,
        nullable:false
    })
    lastnames!:string

    @Column({
        type:"varchar",
        nullable:false,
        length:100,
        unique:true
    })
    email!:string

    @Column({
        type:"varchar",
        length:10,
        nullable:false,
        unique:false
    })
    num_document!:string

    @ManyToOne(()=> RoleEntity, (role)=> role.person)
    @JoinColumn({name:"role_id"})
    role!:RoleEntity

    @ManyToOne(()=> DocumentEntity, (role)=> role.person)
    @JoinColumn({name:"document_type_id"})
    document_type!:DocumentEntity

}