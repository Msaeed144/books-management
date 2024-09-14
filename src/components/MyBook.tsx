import { MyBookInterface } from "@/tools/interfaces"

const MyBook: React.FC<MyBookInterface> = ({book}) =>{
    return(
        <p>{book.title}</p>
    )
}
export default MyBook