---
sidebar_position: 3
---

# Typography
## Applying typography
To use typography, you need to wrap the root component with provider.

```jsx
import { KitraProvider } from '@tra-tech/react-native-kitra';
import App from './src/App';

export default function Main() {
  return (
    <KitraProvider>
      <App />
    </KitraProvider>
  );
}
```

## Accessing and updating typography

Once you've wrapped your app with the provider, you can access the typography styles using the useTypography hook.

```js
import { useTypography } from 'react';

const myTypography= {
            heading: {
                h1: {
                    fontSize: 15,
                    lineHeight: 30,
                    fontFamily: 'poppins-medium',
                }
            },
            body: {
                regular: {
                    fontSize: 10,
                    lineHeight: 12,
                    fontFamily: 'medium',
                },
                otherTypo: {
                    fontSize: 12,
                    lineHeight: 16,
                }
            },
            otherTypo: {
                fontSize: 12,
                lineHeight: 16,
            }
        }

function MyComponent() {
  const { typography, updateTypography } = useTypography();

    useEffect(() => {
      updateTypography(myTypography)
    }, []);
  return (
    <View>
     <Text style={{ typography.body.regular }}>
        This text is styled with the regular body font style.
     </Text>
    </View>
  );
}
```

**Heading:**

```js
 heading: {
    h1: {
      fontSize: 30,
      lineHeight: 45,
      fontFamily: 'medium',
    },
    h2: {
      fontSize: 28,
      lineHeight: 42,
      fontFamily: 'medium',
    },
    h3: {
      fontSize: 23,
      lineHeight: 35,
      fontFamily: 'medium',
    },
    h4: {
      fontSize: 19,
      lineHeight: 29,
      fontFamily: 'medium',
    },
    h5: {
      fontSize: 16,
      lineHeight: 25,
      fontFamily: 'medium',
    },
  },
```
**Body:**
``` js
 body: {
    regular: {
      fontSize: 14,
      lineHeight: 16,
      fontFamily: 'regular',
    },
    sregular: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: 'regular',
    },
    xsregular: {
      fontSize: 10,
      lineHeight: 14,
      fontFamily: 'regular',
    },
    xxsregular: {
      fontSize: 8,
      lineHeight: 12,
      fontFamily: 'regular',
    },
    medium: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: 'medium',
    },
    smedium: {
      fontSize: 12,
      lineHeight: 18,
      fontFamily: 'medium',
    },
    xsmedium: {
      fontSize: 10,
      lineHeight: 16,
      fontFamily: 'medium',
    },
    xxsmedium: {
      fontSize: 8,
      lineHeight: 12,
      fontFamily: 'medium',
    },
  },

```