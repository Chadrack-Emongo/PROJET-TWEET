export function Icones(props) {
    return (
        <div>
            <svg className={props.chassIcone} width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">{props.children}</svg>
            {/* <img src={props.icones} alt="logo" /> */}
        </div>
    )
}