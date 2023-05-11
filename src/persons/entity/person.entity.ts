import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from '../../config/base.entity';
import { RoleEntity } from '../../role/entity/role.entity';
import { DocumentEntity } from '../../document_type/entity/document.entity';

@Entity({ name: "person" })
export class PersonEntity extends BaseEntity {

    @Column({
        type: "varchar",
        length: 100,
        unique: true,
        nullable: false
    })
    institutional_mail!: string

    //* campo nuevo
    @Column({
        type: 'varchar',
        length: 200,
        nullable: false,
        select: false
    })
    password!: string

    @Column({
        type: "varchar",
        length: 30,
        nullable: false
    })
    names!: string

    @Column({
        type: "varchar",
        length: 30,
        nullable: false
    })
    lastnames!: string

    @Column({
        type: "varchar",
        length: 8,
        unique: true,
        nullable: false
    })
    code!: string

    @Column({
        type: "varchar",
        length: 10,
        nullable: false,
        unique: false
    })
    num_document!: string

    @Column({
        type: "varchar",
        length: 255,
        unique: false,
        nullable: true
    })
    img!: string

    @ManyToOne(() => RoleEntity, (role) => role.person)
    @JoinColumn({ name: "role_id" })
    role!: RoleEntity

    @ManyToOne(() => DocumentEntity, (document) => document.person)
    @JoinColumn({ name: "document_id" })
    document_type!: DocumentEntity

}