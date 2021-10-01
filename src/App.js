/*import "./App.css";*/
import Profile from "./components/Profil";
import user from "./user.json";
import statisticalData from "./statistics-data.json";
import friends from "./friends.json";
import transactions from "./transaction.json";
import StatisticList from "./components/statistic/StatisticList";
import Section from "./components/statistic/Section";
import FriendList from "./components/friends/Friendlist";
import TransactionHistory from "./components/transaction/transactionList";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats">
        <StatisticList items={statisticalData} />
      </Section>
      <Section>
        <StatisticList items={statisticalData} />
      </Section>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
