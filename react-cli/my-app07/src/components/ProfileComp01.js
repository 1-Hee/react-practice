import { useParams } from "react-router-dom";

const data = {
  jo: {
    name: "jwh",
    desc: "1-hee",
  },
  lee: {
    name: "lee",
    desc: "lee lee lee",
  },
};

const ProfileComp01 = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <>
      <div className="comp func-comp route-comp">
        <h1>사용자 프로필</h1>
        {profile ? (
          <div>
            <h2> {profile.name}</h2>
            <p> {profile.desc}</p>
          </div>
        ) : (
          <p>존재하지 않는 프로필입니다.</p>
        )}
      </div>
    </>
  );
};

export default ProfileComp01;
