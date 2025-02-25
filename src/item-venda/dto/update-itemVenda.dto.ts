import { PartialType } from "@nestjs/mapped-types";
import { CreateItemVendaDto } from "./create-itemVenda.dto";


export class UpdateItemVendaDto extends PartialType(CreateItemVendaDto) { }