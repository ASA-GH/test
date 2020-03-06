import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/joker/Joker6.png";
import userBackground from "../../assets/images/background/background3.jpg";
import FriendsOnline from './FriendsOnline/FriendsOnline.jsx';
import InformationPerson from './InformationPerson/InformationPerson.jsx';
//import informationPerson from './informationPerson/informationPerson';
//import userPhoto from "../../assets/images//joker/Joker7.png";
//import userPhoto from "../../assets/images//joker/Joker9.jpg";

let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.friendlist}>
        <InformationPerson />
        
        <div className={styles.listOfPeople}>
        <div className={styles.pageNumber}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        <div className={styles.listOfPerson}>
        {
            props.users.map(u => <div className={styles.person1} key={u.id}>
                <div className={styles.person2}>
                <span >
                    <div>
                    <img src={/*u.photos.large !=null ? u.photos.large :*/ userBackground} 
                             className={styles.userBackground} />         </div>   
                    <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>      </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>
                </div>)
        }
        </div>
        </div>
        <FriendsOnline />
    </div>
}
export default Users;