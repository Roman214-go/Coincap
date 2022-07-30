import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as CryptoActionCreators from "../store/actions/crypto"

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(CryptoActionCreators, dispatch)
}