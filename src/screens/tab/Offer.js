import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native';
import {
  CountDown,
  CText,
  Section,
  Spacer,
  ToolBar,
  Wrapper,
} from '../../components';
import { data } from '../../example/data/slide';
import { colors, containerAttr } from '../../utils/styles';
import { sizes, WINDOW_WIDTH } from '../../utils/styles/sizes';

const Offer = () => {
  return (
    <ScrollView>
      <Wrapper statusbar>
        <ToolBar
          centerComponent={
            <CText type="button" size={sizes.xviii} color={colors.dark}>
              Offer
            </CText>
          }
          style={containerAttr.bottomLine}
        />
        <Section p={sizes.xvi}>
          <Section
            p={sizes.xvi}
            background={colors.primary}
            style={styles.banner}>
            <CText color={colors.white} type="button">
              Use “MEGSL” Cupon For Get 90%off
            </CText>
          </Section>
          <Spacer h={sizes.xvi} />
          <Section>
            <ImageBackground style={styles.img} source={data[0].thumb}>
              <CText
                type="button"
                size={sizes.xxiv}
                w={'60%'}
                numLine={2}
                style={styles.title}>
                {data[0].title}
              </CText>
              <Spacer h={sizes.xxxii}/>
              <CountDown time={data[0].time} />
            </ImageBackground>
            <Spacer h={sizes.xvi}/>
            <ImageBackground style={styles.img} source={data[2].thumb}>
              <CText
                type="button"
                size={sizes.xxiv}
                w={'60%'}
                numLine={2}
                style={styles.title}>
                {data[2].title}
              </CText>
              <Spacer h={sizes.xxxii}/>
              <CountDown time={data[2].time} />
            </ImageBackground>
          </Section>
        </Section>
      </Wrapper>
    </ScrollView>
  );
};

export default Offer;

const styles = StyleSheet.create({
  title: {
    lineHeight: 36,
  },
  banner: {
    borderRadius: 5,
  },
  img: {
    width: WINDOW_WIDTH - 16 * 2,
    height: WINDOW_WIDTH * 0.58,
    borderRadius: 5,
    padding: 20,
  },
});
