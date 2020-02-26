import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images//joker/Joker6.png";
//import userPhoto from "../../assets/images//joker/Joker7.png";
//import userPhoto from "../../assets/images//joker/Joker9.jpg";

let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.friendlist}>
        <div className={styles.informationPerson}>
        <div className={styles.informationPerson1}></div>
        <div className={styles.informationPerson2}></div>
        <div className={styles.informationPerson3}></div>
        <div className={styles.informationPerson4}></div>
        <div className={styles.informationPerson5}>
        {/*<img src={userPhoto} className={styles.userPhoto}/>*/}
        </div>
        <div className={styles.informationPerson6}></div> 
        <div className={styles.informationPerson7}></div>
        <div className={styles.informationPerson8}></div>
        <div className={styles.informationPerson9}></div> 

        </div>
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
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>                    </div>
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
        <div className={styles.friendsOnline}>
        <div className={styles.friendsOnline1}></div>
        <div className={styles.friendsOnline2}></div>
        <div className={styles.friendsOnline3}></div>
        <div className={styles.friendsOnline4}></div>
        <div className={styles.friendsOnline5}></div>
        <div className={styles.friendsOnline6}></div>
        <div className={styles.friendsOnline7}></div>
        <div className={styles.friendsOnline8}></div>
        <div className={styles.friendsOnline9}></div>

        </div>
    </div>
}
export default Users;