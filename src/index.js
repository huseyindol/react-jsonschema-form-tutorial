import React from "react";
import ReactDOM from "react-dom";
import Form from "react-jsonschema-form";

import "./styles.css";

const definitionFormElement = {
  schema: {
    type: "object",
    properties: {
      elementName: {
        type: "string",
        title: "Element Adı"
      },
      elementType: {
        title: "Element Tipi",
        type: "string",
        enum: ["Köşe", "Ayna", "Duvar", "Stand", "Görsel", "Lightbox"]
      },
      concept: {
        title: "Konsept",
        type: "array",
        items: {
          type: "string",
          enum: [
            "2009",
            "2012",
            "Solaris Popup",
            "Boyner",
            "Franchise",
            "TopStore",
            "Solaris"
          ]
        },
        uniqueItems: true
      },
      storeArea: {
        title: "Mağaza Alanı",
        type: "array",
        items: {
          type: "string",
          enum: ["Optik", "Kontakt Lens", "Servis Alanı", "Güneş", "Vitrin"]
        },
        uniqueItems: true
      },
      size: {
        type: "object",
        title: "Ölçü Seçin",
        properties: {
          weight: {
            type: "string",
            title: "En"
          },
          height: {
            type: "string",
            title: "Boy"
          }
        }
      },
      gender: {
        type: "array",
        title: "Cinsiyet",
        items: {
          type: "string",
          enum: ["Kadın", "Erkek", "Çocuk", "Unisex", "Yok"]
        },
        uniqueItems: true
      }
    }
  },
  uiSchema: {
    elementName: {},
    concept: {
      "ui:widget": "checkboxes"
    },
    elementType: {
      "ui:widget": "radio"
    },
    size: {
      classNames: "sizeBox"
    },
    storeArea: {
      "ui:widget": "checkboxes"
    },
    gender: {
      "ui:widget": "checkboxes"
    }
  },
  formData: {
    elementName: undefined
  }
};

function onSubmit(data) {
  console.log(data);
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Form
        schema={definitionFormElement.schema}
        uiSchema={definitionFormElement.uiSchema}
        onSubmit={onSubmit}
        formData={definitionFormElement.FormData}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
