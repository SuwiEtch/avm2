import { b2CircleShape } from './Collision/Shapes/b2CircleShape';
import { b2EdgeShape } from './Collision/Shapes/b2EdgeShape';
import { b2MassData } from './Collision/Shapes/b2MassData';
import { b2PolygonShape } from './Collision/Shapes/b2PolygonShape';
import { b2Shape } from './Collision/Shapes/b2Shape';

import { b2AABB } from './Collision/b2AABB';
import { b2Collision } from './Collision/b2Collision';
import { b2ContactID } from './Collision/b2ContactID';
import { b2ContactPoint } from './Collision/b2ContactPoint';
import { b2Distance } from './Collision/b2Distance';
import { b2DistanceInput } from './Collision/b2DistanceInput';
import { b2DistanceOutput } from './Collision/b2DistanceOutput';
import { b2DistanceProxy } from './Collision/b2DistanceProxy';
import { b2DynamicTree } from './Collision/b2DynamicTree';
import { b2DynamicTreeBroadPhase } from './Collision/b2DynamicTreeBroadPhase';
import { b2DynamicTreeNode } from './Collision/b2DynamicTreeNode';
import { b2DynamicTreePair } from './Collision/b2DynamicTreePair';
import { b2Manifold } from './Collision/b2Manifold';
import { b2ManifoldPoint } from './Collision/b2ManifoldPoint';
import { b2OBB } from './Collision/b2OBB';
import { b2RayCastInput } from './Collision/b2RayCastInput';
import { b2RayCastOutput } from './Collision/b2RayCastOutput';
import { b2SeparationFunction } from './Collision/b2SeparationFunction';
import { b2Simplex } from './Collision/b2Simplex';
import { b2SimplexCache } from './Collision/b2SimplexCache';
import { b2SimplexVertex } from './Collision/b2SimplexVertex';
import { b2TimeOfImpact } from './Collision/b2TimeOfImpact';
import { b2TOIInput } from './Collision/b2TOIInput';
import { b2WorldManifold } from './Collision/b2WorldManifold';
import { ClipVertex } from './Collision/ClipVertex';
import { Features } from './Collision/Features';

import { b2Mat22 } from './Common/Math/b2Mat22';
import { b2Mat33 } from './Common/Math/b2Mat33';
import { b2Math } from './Common/Math/b2Math';
import { b2Sweep } from './Common/Math/b2Sweep';
import { b2Transform } from './Common/Math/b2Transform';
import { b2Vec2 } from './Common/Math/b2Vec2';
import { b2Vec3 } from './Common/Math/b2Vec3';

import { b2Color } from './Common/b2Color';
import { b2Settings } from './Common/b2Settings';

import { b2CircleContact } from './Dynamics/Contacts/b2CircleContact';
import { b2Contact } from './Dynamics/Contacts/b2Contact';
import { b2ContactConstraint } from './Dynamics/Contacts/b2ContactConstraint';
import { b2ContactConstraintPoint } from './Dynamics/Contacts/b2ContactConstraintPoint';
import { b2ContactEdge } from './Dynamics/Contacts/b2ContactEdge';
import { b2ContactFactory } from './Dynamics/Contacts/b2ContactFactory';
import { b2ContactRegister } from './Dynamics/Contacts/b2ContactRegister';
import { b2ContactSolver } from './Dynamics/Contacts/b2ContactSolver';
import { b2EdgeAndCircleContact } from './Dynamics/Contacts/b2EdgeAndCircleContact';
import { b2PolyAndCircleContact } from './Dynamics/Contacts/b2PolyAndCircleContact';
import { b2PolyAndEdgeContact } from './Dynamics/Contacts/b2PolyAndEdgeContact';
import { b2PolygonContact } from './Dynamics/Contacts/b2PolygonContact';
import { b2PositionSolverManifold } from './Dynamics/Contacts/b2PositionSolverManifold';

import { b2Controller } from './Dynamics/Controllers/b2Controller';
import { b2ControllerEdge } from './Dynamics/Controllers/b2ControllerEdge';

import { b2DistanceJoint } from './Dynamics/Joints/b2DistanceJoint';
import { b2DistanceJointDef } from './Dynamics/Joints/b2DistanceJointDef';
import { b2FrictionJoint } from './Dynamics/Joints/b2FrictionJoint';
import { b2FrictionJointDef } from './Dynamics/Joints/b2FrictionJointDef';
import { b2GearJoint } from './Dynamics/Joints/b2GearJoint';
import { b2GearJointDef } from './Dynamics/Joints/b2GearJointDef';
import { b2Jacobian } from './Dynamics/Joints/b2Jacobian';
import { b2Joint } from './Dynamics/Joints/b2Joint';
import { b2JointDef } from './Dynamics/Joints/b2JointDef';
import { b2JointEdge } from './Dynamics/Joints/b2JointEdge';
import { b2LineJoint } from './Dynamics/Joints/b2LineJoint';
import { b2LineJointDef } from './Dynamics/Joints/b2LineJointDef';
import { b2MouseJoint } from './Dynamics/Joints/b2MouseJoint';
import { b2MouseJointDef } from './Dynamics/Joints/b2MouseJointDef';
import { b2PrismaticJoint } from './Dynamics/Joints/b2PrismaticJoint';
import { b2PrismaticJointDef } from './Dynamics/Joints/b2PrismaticJointDef';
import { b2PulleyJoint } from './Dynamics/Joints/b2PulleyJoint';
import { b2PulleyJointDef } from './Dynamics/Joints/b2PulleyJointDef';
import { b2RevoluteJoint } from './Dynamics/Joints/b2RevoluteJoint';
import { b2RevoluteJointDef } from './Dynamics/Joints/b2RevoluteJointDef';
import { b2WeldJoint } from './Dynamics/Joints/b2WeldJoint';
import { b2WeldJointDef } from './Dynamics/Joints/b2WeldJointDef';

import { b2Body } from './Dynamics/b2Body';
import { b2BodyDef } from './Dynamics/b2BodyDef';
import { b2ContactFilter } from './Dynamics/b2ContactFilter';
import { b2ContactImpulse } from './Dynamics/b2ContactImpulse';
import { b2ContactListener } from './Dynamics/b2ContactListener';
import { b2ContactManager } from './Dynamics/b2ContactManager';
import { b2DebugDraw } from './Dynamics/b2DebugDraw';
import { b2DestructionListener } from './Dynamics/b2DestructionListener';
import { b2FilterData } from './Dynamics/b2FilterData';
import { b2Fixture } from './Dynamics/b2Fixture';
import { b2FixtureDef } from './Dynamics/b2FixtureDef';
import { b2Island } from './Dynamics/b2Island';
import { b2TimeStep } from './Dynamics/b2TimeStep';
import { b2World } from './Dynamics/b2World';

export default {
	b2CircleShape: b2CircleShape,
	b2EdgeShape: b2EdgeShape,
	b2MassData: b2MassData,
	b2PolygonShape: b2PolygonShape,
	b2Shape: b2Shape,

	b2AABB: b2AABB,
	b2Collision: b2Collision,
	b2ContactID: b2ContactID,
	b2ContactPoint: b2ContactPoint,
	b2Distance: b2Distance,
	b2DistanceInput: b2DistanceInput,
	b2DistanceOutput: b2DistanceOutput,
	b2DistanceProxy: b2DistanceProxy,
	b2DynamicTree: b2DynamicTree,
	b2DynamicTreeBroadPhase: b2DynamicTreeBroadPhase,
	b2DynamicTreeNode: b2DynamicTreeNode,
	b2DynamicTreePair: b2DynamicTreePair,
	b2Manifold: b2Manifold,
	b2ManifoldPoint: b2ManifoldPoint,
	b2OBB: b2OBB,
	b2RayCastInput: b2RayCastInput,
	b2RayCastOutput: b2RayCastOutput,
	b2SeparationFunction: b2SeparationFunction,
	b2Simplex: b2Simplex,
	b2SimplexCache: b2SimplexCache,
	b2SimplexVertex: b2SimplexVertex,
	b2TimeOfImpact: b2TimeOfImpact,
	b2TOIInput: b2TOIInput,
	b2WorldManifold: b2WorldManifold,
	ClipVertex: ClipVertex,
	Features: Features,

	b2Mat22: b2Mat22,
	b2Mat33: b2Mat33,
	b2Math: b2Math,
	b2Sweep: b2Sweep,
	b2Transform: b2Transform,
	b2Vec2: b2Vec2,
	b2Vec3: b2Vec3,

	b2Color: b2Color,
	b2Settings: b2Settings,

	b2CircleContact: b2CircleContact,
	b2Contact: b2Contact,
	b2ContactConstraint: b2ContactConstraint,
	b2ContactConstraintPoint: b2ContactConstraintPoint,
	b2ContactEdge: b2ContactEdge,
	b2ContactFactory: b2ContactFactory,
	b2ContactRegister: b2ContactRegister,
	b2ContactSolver: b2ContactSolver,
	b2EdgeAndCircleContact: b2EdgeAndCircleContact,
	b2PolyAndCircleContact: b2PolyAndCircleContact,
	b2PolyAndEdgeContact: b2PolyAndEdgeContact,
	b2PolygonContact: b2PolygonContact,
	b2PositionSolverManifold: b2PositionSolverManifold,

	b2Controller: b2Controller,
	b2ControllerEdge: b2ControllerEdge,

	b2DistanceJoint: b2DistanceJoint,
	b2DistanceJointDef: b2DistanceJointDef,
	b2FrictionJoint: b2FrictionJoint,
	b2FrictionJointDef: b2FrictionJointDef,
	b2GearJoint: b2GearJoint,
	b2GearJointDef: b2GearJointDef,
	b2Jacobian: b2Jacobian,
	b2Joint: b2Joint,
	b2JointDef: b2JointDef,
	b2JointEdge: b2JointEdge,
	b2LineJoint: b2LineJoint,
	b2LineJointDef: b2LineJointDef,
	b2MouseJoint: b2MouseJoint,
	b2MouseJointDef: b2MouseJointDef,
	b2PrismaticJoint: b2PrismaticJoint,
	b2PrismaticJointDef: b2PrismaticJointDef,
	b2PulleyJoint: b2PulleyJoint,
	b2PulleyJointDef: b2PulleyJointDef,
	b2RevoluteJoint: b2RevoluteJoint,
	b2RevoluteJointDef: b2RevoluteJointDef,
	b2WeldJoint: b2WeldJoint,
	b2WeldJointDef: b2WeldJointDef,

	b2Body: b2Body,
	b2BodyDef: b2BodyDef,
	b2ContactFilter: b2ContactFilter,
	b2ContactImpulse: b2ContactImpulse,
	b2ContactListener: b2ContactListener,
	b2ContactManager: b2ContactManager,
	b2DebugDraw: b2DebugDraw,
	b2DestructionListener: b2DestructionListener,
	b2FilterData: b2FilterData,
	b2Fixture: b2Fixture,
	b2FixtureDef: b2FixtureDef,
	b2Island: b2Island,
	b2TimeStep: b2TimeStep,
	b2World: b2World
};
/*
export function b2Class(name: string, params: any[]): any {

    var c:any = lookup[name];
    if (!c)
        return null;

    var i:any = Object.create(c.prototype);
    c.apply(i, params);

    i.__fast__ = true;

    return i;
}*/
