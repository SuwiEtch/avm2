import { MapObject, ObjectUtilities } from "@awayfl/swf-loader";

import { ASClass } from "./ASClass";
import { NamespaceType } from "../abc/lazy/NamespaceType";
export var builtinNativeClasses: MapObject<ASClass> = ObjectUtilities.createMap<ASClass>();
export var nativeClasses: MapObject<ASClass> = ObjectUtilities.createMap<ASClass>();
export var nativeClassLoaderNames: {
  name: string;
  alias: string;
  nsType: NamespaceType
} [] = [];