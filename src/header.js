import React from 'react';

const Header = ({ onBack, title }) => (
  <div style={{backgroundColor: "#ff8179", borderBottomColor: "#ff4e3f"}}>
    <div style={{padding: 10, paddingVertical: 5, alignItems: 'center', flexDirection: 'row', minHeight: 50}}>
      <div style={{flex: 1, order: 2}}>
        <h3 style={{fontSize: 19, fontWeight: '600', textAlign: 'center', color: 'white'}}>{title}</h3>
      </div>
    </div>
  </div>
);

export default Header;