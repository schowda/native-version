import 'react-native';
import React from 'react';
import AddChatScreen from '../screens/AddChatScreen';
import renderer from 'react-test-renderer'


test('App snapShot', () => {
    const snap = renderer.create(
        <AddChatScreen />
    ).toJSON();
expect(snap).toMatchSnapshot();
});
