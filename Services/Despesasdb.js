
import {db} from "./DbService";

export const criartabela = ()=> {
    db.transaction((transaction)=>{
        transaction.executeSql("CREATE TABLE IF NOT EXISTS "+ 
        "Despesas "+
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, Data TEXT, Valor FOALT, Descricao TEXT, Parcela INTEGER);"
        )
    })
}

export async function adicionarDespesas (d){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("INSERT INTO Despesas(Data,Valor,Descricao,Parcela) VALUES(?,?,?,?);",[d.Data,d.Valor,d.Descricao,d.parcelas],()=>{
                resolve("Adicionado com sucesso")
                console.log("Adicionado com sucesso")
            })
        })
    })
}

export async function recuperandoDespesas (){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
          console.log(  transaction.executeSql("SELECT * FROM Despesas;",[],(transaction, resultados)=>{
                resolve(resultados.rows._array)
                console.log(resultados.rows._array)
            })
          )
        })
    })
}