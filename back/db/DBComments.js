const DB = require('./index')

module.exports = class DBComments{
    static async getAllComments(){
        var query = `SELECT commentID, nickname, text, time FROM comments ORDER BY commentID DESC`
        var result = await DB.query(query, null)
        return result
    }
    
    static async insertComment(comment){
        var query = `insert into comments (nickname ,text,time ) VALUES (?, ?, ?)`
        var values = [comment.nickname, comment.text,comment.time]
        await DB.query(query, values)
    }
    
    static async deleteCommentByID(commentID){
        var query = `DELETE FROM comments WHERE commentID = ?`
        var values = [commentID]
        await DB.query(query, values)
    }   
}